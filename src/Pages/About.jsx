import sign from "../assets/icons/signature.png"
export default function About() {
    return (
      <div className="">
     <h1 className="text-3xl font-semibold text-[#c4ff41]">   Howdy! 👋</h1>
     <p className="p-3">
     About me
     As a frontend developer, I have extensive experience in creating and designing user interfaces. My work involved translating design specifications into responsive and interactive web pages, optimizing performance, and maintaining high standards of code quality. My skills in React JS, Tailwind CSS, and JavaScript, combined with my eye for design and attention to detail, have enabled me to build interfaces that are both visually appealing and functionally robust.

  </p>
  <h1 className="text-2xl">Stay awesome!</h1>
  
  <img src={sign} className="h-50 w-50"/>
  
      </div>
    );
  }