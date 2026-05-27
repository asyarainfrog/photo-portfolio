import React from "react";

import { useState } from "react";

export default function ContactForm() {
  const [form,setForm]=useState({name:"",email:"",message:""});

  const send=async(e)=>{
    e.preventDefault();
    await fetch("http://localhost:3000/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});
    alert("Sent");
  }

  return (
    <form onSubmit={send}>
      <input placeholder="name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <textarea placeholder="message" onChange={e=>setForm({...form,message:e.target.value})}/>
      <button>Send</button>
    </form>
  );
}
