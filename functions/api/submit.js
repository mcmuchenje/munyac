/**
 * POST /api/submit
 */

import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";


export async function onRequestPost(context) {
    try {
      let input = await context.request.formData();
  
      // Convert FormData to JSON
      // NOTE: Allows multiple values per key
      let output = {};
      for (let [key, value] of input) {
        let tmp = output[key];
        if (tmp === undefined) {
          output[key] = value;
        } else {
          output[key] = [].concat(tmp, value);
        }
      }
  
      let pretty = JSON.stringify(output, null, 2);

      const msg = createMimeMessage();
   msg.setSender({ name: "GPT-4", addr: "sequal@tiny.africa" });
   msg.setRecipient("muchenje.munyaradzi@gmail.com");
   msg.setSubject("An email generated in a worker");
   msg.addMessage({
       contentType: 'text/plain',
       data: `${pretty.movies} Congratulations, you just sent an email from a worker.`
   });

   var message = new EmailMessage(
     "sequal@tiny.africa",
     "muchenje.munyaradzi@gmail.com",
     msg.asRaw()
   );
   try {
     await env.SEB.send(message);
   } catch (e) {
     return new Response(e.message);
   }


      return new Response(pretty, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (err) {
      return new Response('Error parsing JSON content', { status: 400 });
    }
  }