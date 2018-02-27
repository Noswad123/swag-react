
const Checkins = [
   
    {
        title:"High School Mentor",
        instructions:"Hi mentors! Thank you so much for your hard work! To make sure SWAG To College is efficient, we must obtain information on the questions below. Please use this form to update us about your mentorship every month. If you mentor more than one student, please fill this form out separately for each mentor you manage every month. ",
        questions:[

            {
                type:"input",
                question:"What is your first Name?",
                helper:"",
                answer:""
            },
            {
                type:"input",
                question:"What is your Last Name?",
                helper:"",
                answer:""
            },
            {
                type:"Selection Other",
                question:"What College do you attend?",
                helper:"",
                options:["Drexel","Duke University","other"],
                answer:""
            },
            {
                type:"input",
                question:"What is your mentee's first name?",
                helper:"",
                answer:""
            },
            {
                type:"input",
                question:"What is your mentee's last name?",
                answer:""
            },
            {
                type:"Selection Other",
                question:"What high school does your mentee attend",
                helper:"",
                answer:"",
                options:["Bothell High School","Bellaire High School","other"]
            
            },
            {
                type:"Selection",
                question:"How many conversations (through phone, text, email, etc.) did you have with your mentee in the last month?",
                helper:"",
                options:[0,1,2,3,4,"5+"],
                answer:""
            },
            {
                type:"Multiple",
                question:"What method(s) do you use to communicate with your mentee?",
                helper:"",
                options:["text","email","phone","a messenger app","other"],
                answer:""
            },
            {
                type:"Multiple",
                question:"What method(s) do you use to communicate with your mentee?",
                helper:"",
                options:["text","email","phone","a messenger app","other"],
                answer:""
            },
            {
                type:"Selection",
                question:"Do you use the timeline provided by SWAG to College with your mentee?",
                helper:"If you aren't using the timeline, please begin doing so by visiting http://www.swagtocollege.org/timeline.html.",
                options:["yes","no","I don't know what the timeline is"],
                answer:""
            },
            {
                type:"Selection Explanation",
                question:"Did your mentee imporve academically this month?",
                helper:"",
                options:["yes", "no", "not sure"],
                answer:"",
                response:""
            },
            {
                type:"Selection Explanation",
                question:"Did your relationship with your mentee impove this month?",
                helper:"",
                options:["yes", "no", "not sure"],
                answer:"",
                response:""
            },
            {
                type:"Response",
                question:"Please tell us about your mentee's accomplishments",
                helper:"We love commending mentees for their accomplishments as well as mentors for their guidance. Is there anything your mentee has done that you would like to highlight?",
                response:""
            },
            {
                type:"Response",
                question:"Do you have any concerns with your mentor-mentee relationship?",
                helper:"Please offer an honest assessment of your experience thus far. We would love to hear your feedback and provide the best possible mentorship experience! As a mentor, can you offer any suggestions or improvements to the process? What do you think has worked well?",
                response:""
            },
            {
                type:"Response",
                question:"Is there anything else you would like to tell us?",
                helper:"",
                response:""
            }
        ]
    }

]

export default Checkins;