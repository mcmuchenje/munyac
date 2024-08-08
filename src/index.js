/**
 * POST /api/submit
 */

import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";


export default {
	async fetch(req) {
		if (req.method === 'POST') {
		try {
			const formData = await req.formData();
        const name = formData.get('name'); // Extract the form field 'name'
        const greeting = greetUser(name);  // Call your function with the extracted data

        return new Response(greeting, {
          headers: { 'Content-Type': 'text/plain' },
        });
      } catch (error) {
        return new Response('Error processing request', { status: 500 });
      }
	  
		// 	const msg = createMimeMessage();
		//  msg.setSender({ name: "GPT-4", addr: "sequal@tiny.africa" });
		//  msg.setRecipient("muchenje.munyaradzi@gmail.com");
		//  msg.setSubject("An email generated in a worker");
		//  msg.addMessage({
		// 	 contentType: 'text/plain',
		// 	 data: `${pretty.movies} Congratulations, you just sent an email from a worker.`
		//  });
	  
		//  var message = new EmailMessage(
		//    "sequal@tiny.africa",
		//    "muchenje.munyaradzi@gmail.com",
		//    msg.asRaw()
		//  );
		//  try {
		//    await env.SEB.send(message);
		//  } catch (e) {
		//    return new Response(e.message);
		//  }
	  
	  
		// 	return new Response(pretty, {
		// 	  headers: {
		// 		'Content-Type': 'application/json;charset=utf-8',
		// 	  },
		// 	});
		//   } catch (err) {
		// 	return new Response('Error parsing JSON content', { status: 400 });
		//   }
	}
}
    
  }