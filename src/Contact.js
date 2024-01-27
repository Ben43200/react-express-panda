import axios from "axios"
import React from "react"
import "./App.css"

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject:'',
          message: ''
        }
    }
	onNameChange(event) {
        this.setState({name: event.target.value})
    }

onEmailChange(event) {
        this.setState({email: event.target.value})
    }

onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

onMsgChange(event) {
        this.setState({message: event.target.value})
    }

	submitEmail(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:5000/send/", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
}

resetForm(){
        this.setState({name: '', email: '',subject:'', message: ''})
}
render() {
	return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title">
							<h2 className="title">Contact Us</h2>
							<p>Let us know what you think! In order to provide better service,
								 please do not hesitate to give us your feedback. Thank you.</p><hr/>
							<form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
								method="POST">
							<div className="form-group">
							<div className="row">
							<div className="col-md-6">
								<input placeholder = "Name"  id="name" type="text" 
								   className="form-control" required value={this.state.name} 
								   onChange={this.onNameChange.bind(this)}/>
							</div>
							<div className="col-md-6">
								<input placeholder = "Email"  id="email" type="email"
								  className="form-control" aria-describedby="emailHelp"
								  required value={this.state.email} onChange=
								  {this.onEmailChange.bind(this)}/>
							</div>
							</div>
							</div>
							<div className="form-group">
								<input placeholder = "Subject"  id="subject" type="text"
								  className="form-control" required value={this.state.subject}
								  onChange={this.onSubjectChange.bind(this)}/>
							</div>
							<div className="form-group">
								<textarea placeholder = "Message"  id="message" 
								   className="form-control" rows="1" 
								   required value={this.state.message}
								   onChange= {this.onMsgChange.bind(this)}/>
							</div>
							<button type="submit" className="primary-btn submit">Submit</button>
							</form>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
}

}







































// import React from "react";
// import axios from "axios";
// // export  { Component }  from "react"

// export default class Contact extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           name: '',
//           email: '',
//           subject:'',
//           message: ''
//         }
//     }

//     onNameChange(event) {
//         this.setState({name: event.target.value})
//     }

// onEmailChange(event) {
//         this.setState({email: event.target.value})
//     }

// onSubjectChange(event) {
//         this.setState({subject: event.target.value})
//     }

// onMsgChange(event) {
//         this.setState({message: event.target.value})
//     }

//     submitEmail(e){
//         e.preventDefault();
//         axios({
//           method: "POST", 
//           url:"/send", 
//           data:  this.state
//         }).then((response)=>{
//           if (response.data.status === 'success'){
//               alert("Message Sent."); 
//               this.resetForm()
//           }else if(response.data.status === 'fail'){
//               alert("Message failed to send.")
//           }
//         })
// }

// resetForm(){
//         this.setState({name: '', email: '',subject:'', message: ''})
// }
// render() {
//     return (
//         <div className="section">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="section-title">
//                             <h2 className="title">Contact Us</h2>
//                             <p>Let us know what you think! In order to provide better service,
//                                  please do not hesitate to give us your feedback. Thank you.</p><hr/>
//                             <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
//                                 method="POST">
//                             <div className="form-group">
//                             <div className="row">
//                             <div className="col-md-6">
//                                 <input placeholder = "Name"  id="name" type="text" 
//                                    className="form-control" required value={this.state.name} 
//                                    onChange={this.onNameChange.bind(this)}/>
//                             </div>
//                             <div className="col-md-6">
//                                 <input placeholder = "Email"  id="email" type="email"
//                                   className="form-control" aria-describedby="emailHelp"
//                                   required value={this.state.email} onChange=
//                                   {this.onEmailChange.bind(this)}/>
//                             </div>
//                             </div>
//                             </div>
//                             <div className="form-group">
//                                 <input placeholder = "Subject"  id="subject" type="text"
//                                   className="form-control" required value={this.state.subject}
//                                   onChange={this.onSubjectChange.bind(this)}/>
//                             </div>
//                             <div className="form-group">
//                                 <textarea placeholder = "Message"  id="message" 
//                                    className="form-control" rows="1" 
//                                    required value={this.state.message}
//                                    onChange= {this.onMsgChange.bind(this)}/>
//                             </div>
//                             <button type="submit" className="primary-btn submit">Submit</button>
//                             </form>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// }
// // }












// import { useState } from "react";

// export default function MyForm() {
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const baseUrl = "http://localhost:8000";

//   const sendEmail = async () => {
//     let dataSend = {
//       email: email,
//       subject: subject,
//       message: message,
//     };

//     const res = await fetch(`${baseUrl}/email/sendEmail`, {
//       method: "POST",
//       body: JSON.stringify(dataSend),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       // HANDLING ERRORS
//       .then((res) => {
//         console.log(res);
//         if (res.status > 199 && res.status < 300) {
//           alert("Send Successfully !");
//         }
//       });
//   };
//   return (
// <div>

//           <Stack spacing={4}>
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input
//                 type="email"
//                 placeholder="Receiver's Email Address"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormControl>
//             <FormControl id="email">
//               <FormLabel>Subject</FormLabel>
//               <Input
//                 onChange={(e) => setSubject(e.target.value)}
//                 type="text"
//                 placeholder="Enter the subject here..."
//               />
//             </FormControl>
//             <FormControl id="text">
//               <FormLabel>Message</FormLabel>
//               <Textarea
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Enter your message here..."
//               />
//             </FormControl>
//             <Stack spacing={10}>
//               <Button
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//                 onClick={() => sendEmail()}
//               >
//                 Send Email
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
  
//   );
// }