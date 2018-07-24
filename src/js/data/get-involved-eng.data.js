const EngInvolved = [
  {
    route:"hsstudent",
    level: "High School Student",
    blurb:
      "As a mentee, you will receive a college mentor who will check in with you weekly through text, phone, or email. Your mentor will walk you through our timelines that begin in 9th grade and continue until you graduate from high school and start college. Your mentor will help make your college dreams possible!",
    imgUrl: "./img/involved-mentee.jpg",
    options: [
      {
        title: "Mentee",
        summary:
          "Are you interested in having a college student  help you with high school and the college application process? If so, please consider signing up for a college mentor. Your mentor will check-in with you each week through text, phone call, or email to ensure you reach your goals.",
        form: "hsmentee"
      },
      {
        title: "Campus representative",
        summary:
          "Are you a SWAG To College mentee? Are you interested in leading a SWAG To College club at your high school? If so, apply to be a campus representative. As a campus rep, you will lead meetings of existing SWAG To College mentees, expand the program on your campus, and build a SWAG To College culture at your school. ",
        form: "hsrep"
      }
    ]
  },
  {
    route:"collegestudent",
    level: "College Student",
    blurb: `As a college student, there are several ways to become involved in SWAG To College. Specifically, 
    you can: (1) serve as a mentor for a high school student; (2) if you are a college freshman or sophomore,
     receive an upperclassman mentor; (3) if you are a college junior or senior, serve as a mentor for an underclassman;
      or (4) if you are a college sophomore, junior, or senior, receive a mentor who is a young professional in your career
       field of interest.`,
    imgUrl: "./img/involved-mentor.jpg",
    options: [
      {
        title: "Mentor",
        summary: "Are you interested in helping an underserved, first-generation, low-income high school student reach college? If so, consider signing up to be a mentor. Through this program, you will be paired with a high school student whom you check-in with weekly to support through high school and the college application process.",
        form: "collegementor"
      },
      {
        title: "Upper Classman Mentee",
        summary: "Are you a freshman or sophomore in college? Would you like some support through these first two years of college? If so, consider signing up for an Upperclassman mentor. Through this program, you will be paired with a junior or senior in college who will guide you through these first two years of college.",
        form: "uppermentee"
      },
      {
        title: "Upper Classmen Mentor",
        summary: "Are you a junior or senior in college? Would you like to support a freshman or sophomore through the first two years of college? If so, consider becoming an Upperclassman mentor. Through this program, you will be paired with a freshman or sophomore in college whom you will check-in with monthly to support them through college.",
        form: "uppermentor"
      },
      {
        title: "Young Professional Mentee",
        summary: "Are you a junior or senior in college? Would you like support to reach your career goals? If so, consider signing up for a Young Professional mentor. Through this program, you will be paired with a Young Professional in your career field who can help you reach your career goals. ",
        form: "ypmentee"
      }
    ]
  },

  {
    route:"yp",
    level: "Young Professional",
    blurb:
      "As a young professional (YP) mentor, you will be paired with a college student who aspires to enter your career field. Through monthly check ins, you will help your mentee build social capital, expand their network, and access new opportunities. Your support will ensure your mentee secures the career of their dreams! ​",
    imgUrl: "./img/involved-yp.png",
    options: [
      {
        title: "YP Mentor",
        summary:
          "As a young professional (YP) mentor, you will be paired with a college student who aspires to enter your career field. Through monthly check-ins, you will help your mentee build social capital, expand their network, and access new opportunities. Your support will ensure your mentee secures the career of their dreams! ​",
        form: "ypmentor"
      }
    ]
  },
  {
    route:"parent",
    level: "Parents",
    blurb:
      "As a parent, you are an important resource for your student. We are eager to work with parents just like you to help support your child. Please visit our Parent Timeline to see steps you can take to help your child.  Also, please consider joining our Parent Board to help solve important issues in your child's education. ​",
    imgUrl: "./img/parents.jpeg",
    options: [
      {
        title: "Parent",
        summary:
          "As a parent, you are an important resource for your student. We are eager to work with parents just lke you to help support your child. Please visit our Parent Timeline to see steps you can take to help your child.  Also, please consider joining our Parent Board to help solve important issues in your child's education. ​",
        form: "parentboard"
      }
    ]
  },
  {
    route:"schooladmin",
    level: "School Administration",
    blurb:
      "We know that partnerships with school and university administrators are crucial to our success. We would love to work with your students whether in high school or college. Through these partnerships, if your students are in high school we will provide them with college mentors to help them navigate high school and reach their college dreams. If your students are in college, we will provide them with young professional mentors to guide them through college and into the workforce. ​",
    imgUrl: "./img/school-admin.jpg",
    options: [
      {
        title: "School Admin",
        summary: "",
        form: "schooladmin"
      }
    ]
  },
  {
    route:"communitymember",
    level: "Community Member",
    blurb:
      "We know that our community partners are crucial to our success. We also know that every person and every organization has a role to play in this work and in our movement. Whether you are professional looking to be a mentor a college student, a service provider looking to serve our students, or a community member just hoping to learn more about our movement to expand equality of opportunity, we have a place for you. Please fill out the form below, so we can provide you more information about SWAG To College.​",
    imgUrl: "./img/community-members.jpg",
    options: [
      {
        title: "Community Member",
        summary:
          "We know that our community partners are crucial to our success. We also know that every person and every organization has a role to play in this work and in our movement. Whether you are professional looking to mentor a service provider looking to serve our students, or a community member just hoping to learn more about our movement to expand equality of opportunity, we have a place for you. Please fill out the form below, so we can provide you more information about SWAG To College.",
        form: "communitymember"
      }
    ]
  }
];

export default EngInvolved;
