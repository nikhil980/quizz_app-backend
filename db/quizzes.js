import { v4 as uuid } from "uuid";
// const {v4:uuid} =require("uuid");
const quizzes = {
  data: [
   
    
    {
      id: uuid(),
      main:"Movies",
      category: "Marvel",
      image:
        "https://th.bing.com/th/id/OIP.Pumos9piBRNTxtOpdGgSTQHaEK?rs=1&pid=ImgDetMain",
      title: "Marvel",
      description:
        " Marvel property of The Walt Disney Company since December 31, 2009, and a subsidiary of Disney Publishing Worldwide since March 2023",

      quizz: [
        // 1st quizz
        {
          id: uuid(),
          question: "what is the name of thor father?",
          options: [
            { id: uuid(), option: "Tony start", iscorrect: false },
            { id: uuid(), option: "Loki", iscorrect: false },
            { id: uuid(), option: "HULk", iscorrect: false },
            { id: uuid(), option: "None of these", iscorrect: true },
          ],
        },
        //2nd quizz
        {
          id: uuid(),
          question: "who was the Stan Lee?",
          options: [
            { id: uuid(), option: "A truck Driver", iscorrect: false },
            { id: uuid(), option: "A worker ", iscorrect: false },
            { id: uuid(), option: "A writter", iscorrect: false },
            { id: uuid(), option: "One above all", iscorrect: true },
          ],
        },
      ],
    },
    {
      id: uuid(),
      main:"Movies",
      category: "DC",
      image:
        "https://images.hdqwalls.com/download/the-batman-dc-darkness-4k-0o-1920x1080.jpg",
      title: "DC",
      description: "lomrem picsum",

      quizz: [
        // 1st quizz
        {
          id: uuid(),
          question: "In which place Batman was live?",
          options: [
            { id: uuid(), option: "HonKong", iscorrect: false },
            { id: uuid(), option: "America", iscorrect: false },
            { id: uuid(), option: "Gautum", iscorrect: false },
            { id: uuid(), option: "Ghar per rehta hai", iscorrect: true },
          ],
        },
        //2nd quizz
        {
          id: uuid(),
          question: "Who was the fastest ?",
          options: [
            { id: uuid(), option: "Flash", iscorrect: false },
            { id: uuid(), option: "Batman ", iscorrect: false },
            { id: uuid(), option: "Superman", iscorrect: false },
            { id: uuid(), option: "Hanuman", iscorrect: true },
          ],
        },
      ],
    },
  
    {
      id: uuid(),
      main:"Programming",
      category: "C++ Programming",
      image:
        "https://th.bing.com/th/id/OIP.n5nqlyqAdE0PjdsW4eiR5QHaHa?rs=1&pid=ImgDetMain",
      title: "C++ Programming",
      description:
        "Test your C++ knowledge with multiple-choice questions (MCQs) on various topics. Choose from different C++ tests ",

      quizz: [
        // 1st quizz
        {
          id: uuid(),
          question: `who was the founder of c++?`,
          options: [
            { id: uuid(), option: `Bjarne Stroustrup`, iscorrect: true },
            { id: uuid(), option: `Ada Lovelace`, iscorrect: false },
            { id: uuid(), option: `Dennis M. Ritchie`, iscorrect: false },
            { id: uuid(), option: `James Gosling`, iscorrect: false },
          ],
        },
        //2nd quizz
        {
          id: uuid(),
          question: `How do you insert COMMENTS in C++ code?`,
          options: [
            { id: uuid(), option: `#This is a comment`, iscorrect: false },
            { id: uuid(), option: `<--This is a comment-->`, iscorrect: false },
            { id: uuid(), option: `//This is a comment`, iscorrect: true },
            { id: uuid(), option: `/*This is a comment`, iscorrect: false },
          ],
        },
        //3rd quizz
        {
          id: uuid(),
          question: `How do you create a variable with the numeric value 5?`,
          options: [
            { id: uuid(), option: `double x=5`, iscorrect: false },
            { id: uuid(), option: `int x=5`, iscorrect: true },
            { id: uuid(), option: `num x=5`, iscorrect: false },
            { id: uuid(), option: `x=5`, iscorrect: false },
          ],
        },
        //4th quizz
        {
          id: uuid(),
          question: `Which method can be used to find the length of a string?`,
          options: [
            { id: uuid(), option: `length()`, iscorrect: true },
            { id: uuid(), option: `getSize()`, iscorrect: false },
            { id: uuid(), option: `length`, iscorrect: false },
            { id: uuid(), option: `getLength`, iscorrect: false },
          ],
        },
        //5th quizz
        {
          id: uuid(),
          question: `Which operator can be used to compare two values?`,
          options: [
            { id: uuid(), option: `==`, iscorrect: true },
            { id: uuid(), option: `=`, iscorrect: false },
            { id: uuid(), option: `><`, iscorrect: false },
            { id: uuid(), option: `<>`, iscorrect: false },
          ],
        },
        //6th quizz
        {
          id: uuid(),
          question: `Which operator is used to multiply numbers?`,
          options: [
            { id: uuid(), option: `#`, iscorrect: false },
            { id: uuid(), option: `$`, iscorrect: false },
            { id: uuid(), option: `*`, iscorrect: true },
            { id: uuid(), option: `X`, iscorrect: false },
          ],
        },
        //7th quizz
        {
          id: uuid(),
          question: `How do you start writing an if statement in C++?`,
          options: [
            { id: uuid(), option: `if(x>y)`, iscorrect: true },
            { id: uuid(), option: `if x>y then`, iscorrect: false },
            { id: uuid(), option: `(x>y)?x:y`, iscorrect: false },
            { id: uuid(), option: `IF(x>y)`, iscorrect: false },
          ],
        },
        //8th quiz
        {
          id: uuid(),
          question: `Which keyword is used to return a value inside a method?`,
          options: [
            { id: uuid(), option: `break`, iscorrect: false },
            { id: uuid(), option: `push`, iscorrect: false },
            { id: uuid(), option: `send`, iscorrect: false },
            { id: uuid(), option: `return`, iscorrect: true },
          ],
        },
        //9th quiz
        {
          id: uuid(),
          question: `Which statement is used to stop a loop?`,
          options: [
            { id: uuid(), option: `break`, iscorrect: true },
            { id: uuid(), option: `return`, iscorrect: false },
            { id: uuid(), option: `stop`, iscorrect: false },
            { id: uuid(), option: `exit`, iscorrect: false },
          ],
        },
        //10th quiz
        {
          id: uuid(),
          question: `What is a correct syntax to output "Hello World" in C++ ?`,
          options: [
            {
              id: uuid(),
              option: `Console.WriteLine("Hello World")`,
              iscorrect: false,
            },
            { id: uuid(), option: `print("Hello World")`, iscorrect: false },
            {
              id: uuid(),
              option: `System.out.println("Hello World")`,
              iscorrect: false,
            },
            { id: uuid(), option: `cout<<"HelloWorld`, iscorrect: true },
          ],
        },
      ],
    },
    {
      id: uuid(),
      main:"Programming",
      category: "JAVA Programming",
      image:
        "https://th.bing.com/th/id/OIP.2vUTawLyzalDoTv7zF6JTQHaEo?rs=1&pid=ImgDetMain",
      title: "JAVA Programming",
      description:
        "Test your JAVA knowledge with multiple-choice questions (MCQs) on various topics. Choose from different JAVA tests ",

      quizz: [
        // 1st quizz
        {
          id: uuid(),
          question: `who was the founder of JAVA?`,
          options: [
            { id: uuid(), option: `Bjarne Stroustrup`, iscorrect: false },
            { id: uuid(), option: `Ada Lovelace`, iscorrect: false },
            { id: uuid(), option: `Dennis M. Ritchie`, iscorrect: false },
            { id: uuid(), option: `James Gosling`, iscorrect: true },
          ],
        },
        //2nd quizz
        {
          id: uuid(),
          question: `How do you insert COMMENTS in JAVA code?`,
          options: [
            { id: uuid(), option: `#This is a comment`, iscorrect: false },
            { id: uuid(), option: `<--This is a comment-->`, iscorrect: false },
            { id: uuid(), option: `//This is a comment`, iscorrect: true },
            { id: uuid(), option: `/*This is a comment`, iscorrect: false },
          ],
        },
        //3rd quizz
        {
          id: uuid(),
          question: `How do you create a variable with the numeric value 5?`,
          options: [
            { id: uuid(), option: `double x=5`, iscorrect: false },
            { id: uuid(), option: `int x=5`, iscorrect: true },
            { id: uuid(), option: `num x=5`, iscorrect: false },
            { id: uuid(), option: `x=5`, iscorrect: false },
          ],
        },
        //4th quizz
        {
          id: uuid(),
          question: `Which method can be used to find the length of a string?`,
          options: [
            { id: uuid(), option: `length()`, iscorrect: true },
            { id: uuid(), option: `getSize()`, iscorrect: false },
            { id: uuid(), option: `length`, iscorrect: false },
            { id: uuid(), option: `getLength`, iscorrect: false },
          ],
        },
        //5th quizz
        {
          id: uuid(),
          question: `Which operator can be used to compare two values?`,
          options: [
            { id: uuid(), option: `==`, iscorrect: true },
            { id: uuid(), option: `=`, iscorrect: false },
            { id: uuid(), option: `><`, iscorrect: false },
            { id: uuid(), option: `<>`, iscorrect: false },
          ],
        },
        //6th quizz
        {
          id: uuid(),
          question: `Which operator is used to multiply numbers?`,
          options: [
            { id: uuid(), option: `#`, iscorrect: false },
            { id: uuid(), option: `$`, iscorrect: false },
            { id: uuid(), option: `*`, iscorrect: true },
            { id: uuid(), option: `X`, iscorrect: false },
          ],
        },
        //7th quizz
        {
          id: uuid(),
          question: `How do you start writing an if statement in JAVA?`,
          options: [
            { id: uuid(), option: `if(x>y)`, iscorrect: true },
            { id: uuid(), option: `if x>y then`, iscorrect: false },
            { id: uuid(), option: `(x>y)?x:y`, iscorrect: false },
            { id: uuid(), option: `IF(x>y)`, iscorrect: false },
          ],
        },
        //8th quiz
        {
          id: uuid(),
          question: `Which keyword is used to return a value inside a method?`,
          options: [
            { id: uuid(), option: `break`, iscorrect: false },
            { id: uuid(), option: `push`, iscorrect: false },
            { id: uuid(), option: `send`, iscorrect: false },
            { id: uuid(), option: `return`, iscorrect: true },
          ],
        },
        //9th quiz
        {
          id: uuid(),
          question: `Which statement is used to stop a loop?`,
          options: [
            { id: uuid(), option: `break`, iscorrect: true },
            { id: uuid(), option: `return`, iscorrect: false },
            { id: uuid(), option: `stop`, iscorrect: false },
            { id: uuid(), option: `exit`, iscorrect: false },
          ],
        },
        //10th quiz
        {
          id: uuid(),
          question: `What is a correct syntax to output "Hello World" in JAVA ?`,
          options: [
            {
              id: uuid(),
              option: `Console.WriteLine("Hello World")`,
              iscorrect: false,
            },
            { id: uuid(), option: `print("Hello World")`, iscorrect: false },
            {
              id: uuid(),
              option: `System.out.println("Hello World")`,
              iscorrect: true,
            },
            { id: uuid(), option: `cout<<"HelloWorld`, iscorrect: false },
          ],
        },
      ],
    },
    {
      id: uuid(),
      main:"Programming",
      category: "Python Programming",
      image:
        "https://th.bing.com/th/id/OIP.UvFPS1VCC8EAmfawt2CZAgAAAA?pid=ImgDet&w=320&h=240&rs=1",
      title: "Python Programming",
      description:
        "Test your Python knowledge with multiple-choice questions (MCQs) on various topics. Choose from different Python tests ",

      quizz: [
        // 1st quizz
        {
          id: uuid(),
          question: `who was the founder of Python?`,
          options: [
            { id: uuid(), option: `Bjarne Stroustrup`, iscorrect: false },
            { id: uuid(), option: `Guido van Rossum`, iscorrect: true },
            { id: uuid(), option: `Dennis M. Ritchie`, iscorrect: false },
            { id: uuid(), option: `James Gosling`, iscorrect: false },
          ],
        },
        //2nd quizz
        {
          id: uuid(),
          question: `How do you insert COMMENTS in Python code?`,
          options: [
            { id: uuid(), option: `#This is a comment`, iscorrect: false },
            { id: uuid(), option: `<--This is a comment-->`, iscorrect: false },
            { id: uuid(), option: `//This is a comment`, iscorrect: true },
            { id: uuid(), option: `/*This is a comment`, iscorrect: false },
          ],
        },
        //3rd quizz
        {
          id: uuid(),
          question: `How do you create a variable with the numeric value 5?`,
          options: [
            { id: uuid(), option: `double x=5`, iscorrect: false },
            { id: uuid(), option: `int x=5`, iscorrect: true },
            { id: uuid(), option: `num x=5`, iscorrect: false },
            { id: uuid(), option: `x=5`, iscorrect: false },
          ],
        },
        //4th quizz
        {
          id: uuid(),
          question: `Which method can be used to find the length of a string?`,
          options: [
            { id: uuid(), option: `length()`, iscorrect: false },
            { id: uuid(), option: `getSize()`, iscorrect: false },
            { id: uuid(), option: `len()`, iscorrect: true },
            { id: uuid(), option: `getLength`, iscorrect: false },
          ],
        },
        //5th quizz
        {
          id: uuid(),
          question: `Which operator can be used to compare two values?`,
          options: [
            { id: uuid(), option: `==`, iscorrect: true },
            { id: uuid(), option: `=`, iscorrect: false },
            { id: uuid(), option: `><`, iscorrect: false },
            { id: uuid(), option: `<>`, iscorrect: false },
          ],
        },
        //6th quizz
        {
          id: uuid(),
          question: `Which operator is used to multiply numbers?`,
          options: [
            { id: uuid(), option: `#`, iscorrect: false },
            { id: uuid(), option: `$`, iscorrect: false },
            { id: uuid(), option: `*`, iscorrect: true },
            { id: uuid(), option: `X`, iscorrect: false },
          ],
        },
        //7th quizz
        {
          id: uuid(),
          question: `How do you start writing an if statement in Python?`,
          options: [
            { id: uuid(), option: `if(x>y)`, iscorrect: true },
            { id: uuid(), option: `if x>y then`, iscorrect: false },
            { id: uuid(), option: `(x>y)?x:y`, iscorrect: false },
            { id: uuid(), option: `IF(x>y)`, iscorrect: false },
          ],
        },
        //8th quiz
        {
          id: uuid(),
          question: `Which keyword is used to return a value inside a method?`,
          options: [
            { id: uuid(), option: `break`, iscorrect: false },
            { id: uuid(), option: `push`, iscorrect: false },
            { id: uuid(), option: `send`, iscorrect: false },
            { id: uuid(), option: `return`, iscorrect: true },
          ],
        },
        //9th quiz
        {
          id: uuid(),
          question: `Which statement is used to stop a loop?`,
          options: [
            { id: uuid(), option: `break`, iscorrect: true },
            { id: uuid(), option: `return`, iscorrect: false },
            { id: uuid(), option: `stop`, iscorrect: false },
            { id: uuid(), option: `exit`, iscorrect: false },
          ],
        },
        //10th quiz
        {
          id: uuid(),
          question: `What is a correct syntax to output "Hello World" in Python ?`,
          options: [
            {
              id: uuid(),
              option: `Console.WriteLine("Hello World")`,
              iscorrect: false,
            },
            { id: uuid(), option: `print("Hello World")`, iscorrect: true },
            {
              id: uuid(),
              option: `System.out.println("Hello World")`,
              iscorrect: false,
            },
            { id: uuid(), option: `cout<<"HelloWorld`, iscorrect: false },
          ],
        },
      ],
    },
    {
      id: uuid(),
      main:"Programming",
      category: "HTML",
      image:
        "https://th.bing.com/th/id/OIP.MJgL97wJN9aI7bIr_dgnKQHaFj?rs=1&pid=ImgDetMain",
      title: "HTML",
      description:
        "Evaluate your HTML expertise by participating in our HTML assessment tests, which consist of multiple-choice questions (MCQs). ",

      quizz: [
        // 1st quizz
        {
          id: uuid(),
          question: `What does HTML stand for?`,
          options: [
            { id: uuid(), option: `Hyper Text Makeup Language`, iscorrect: false },
            { id: uuid(), option: `Hyperlinks and Text Markup Language`, iscorrect: false },
            { id: uuid(), option: `Hyper Text Markup Language`, iscorrect: true },
            { id: uuid(), option: `Home Tool Markup Language`, iscorrect: false },
          ],
        },
        //2nd quizz
        {
          id: uuid(),
          question: `Which HTML tag is used to define an internal style sheet?`,
          options: [
            { id: uuid(), option: `<style>`, iscorrect: true },
            { id: uuid(), option: `<css>`, iscorrect: false },
            { id: uuid(), option: `<script>`, iscorrect: false },
            { id: uuid(), option: `<Link>`, iscorrect: false },
          ],
        },
        //3rd quizz
        {
          id: uuid(),
          question: `What is the correct HTML element for inserting a line break?`,
          options: [
            { id: uuid(), option: `<br>`, iscorrect: true },
            { id: uuid(), option: `<lb>`, iscorrect: false },
            { id: uuid(), option: `<break>`, iscorrect: false },
            { id: uuid(), option: `<newline>`, iscorrect: false },
          ],
        },
        //4th quizz
        {
          id: uuid(),
          question: `Which HTML tag is used to define a hyperlink, and what attribute is used to specify the URL?`,
          options: [
            { id: uuid(), option: `<link>, href`, iscorrect: false },
            { id: uuid(), option: `<a>, href`, iscorrect: true },
            { id: uuid(), option: `<hyperlink>, src`, iscorrect: false },
            { id: uuid(), option: `<url>, link`, iscorrect: false },
          ],
        },
        //5th quizz
        {
          id: uuid(),
          question: `How can you open a link in a new tab/browser window in HTML?`,
          options: [
            { id: uuid(), option: `<a href="url" target="new">`, iscorrect: false },
            { id: uuid(), option: `<a href="url" target="_blank">`, iscorrect: true },
            { id: uuid(), option: `<a href="url" newtab>`, iscorrect: false },
            { id: uuid(), option: `<a href="url" open>`, iscorrect: false },
          ],
        },
        //6th quizz
        {
          id: uuid(),
          question: `What is the correct HTML for creating a dropdown list?`,
          options: [
            { id: uuid(), option: `<dropdown>`, iscorrect: false },
            { id: uuid(), option: `<list>`, iscorrect: false },
            { id: uuid(), option: `<select>`, iscorrect: true },
            { id: uuid(), option: `<input type="dropdown">`, iscorrect: false },
          ],
        },
        //7th quizz
        {
          id: uuid(),
          question: `Which attribute is used to specify the character encoding for the HTML document?`,
          options: [
            { id: uuid(), option: `encoding`, iscorrect: false },
            { id: uuid(), option: `Relativity`, iscorrect: true },
            { id: uuid(), option: `codepage`, iscorrect: false },
            { id: uuid(), option: `meta`, iscorrect: false },
          ],
        },
        //8th quiz
        {
          id: uuid(),
          question: `What is the correct HTML for adding a background color?`,
          options: [
            { id: uuid(), option: `<background>`, iscorrect: false },
            { id: uuid(), option: `<color>`, iscorrect: false },
            { id: uuid(), option: `<bgcolor>`, iscorrect: false },
            { id: uuid(), option: `<body style="background-color:yellow;">`, iscorrect: true },
          ],
        },
        //9th quiz
        {
          id: uuid(),
          question: `Which tag is used to define an unordered list in HTML?`,
          options: [
            { id: uuid(), option: `<list>`, iscorrect: false},
            { id: uuid(), option: `<ul>`, iscorrect: true },
            { id: uuid(), option: `<li>`, iscorrect: false },
            { id: uuid(), option: `<ol>`, iscorrect: false },
          ],
        },
        //10th quiz
        {
          id: uuid(),
          question: `How can you make a numbered list in HTML?`,
          options: [
            {
              id: uuid(),
              option: `<li>`,
              iscorrect: false,
            },
            { id: uuid(), option: `<ul>`, iscorrect: false },
            {
              id: uuid(),
              option: `<ol>`,
              iscorrect: true,
            },
            { id: uuid(), option: `<list>`, iscorrect: false },
          ],
        },
      ],
    },
    {
      id: uuid(),
      main:"General",
      category: "Maths Quiz",
      image:
        "https://img.jagranjosh.com/imported/images/E/Articles/maths2.jpg",
      title: "Maths Quiz",
      description:
        "Math quizzes are a fun and challenging way to improve your problem-solving skills, for students and math enthusiasts alike. They also make learning math a more enjoyable experience. ",

      quizz: [
        // 1st quizz
        {
          id: uuid(),
          question: `What is 150% of 100?`,
          options: [
            { id: uuid(), option: `150`, iscorrect: true },
            { id: uuid(), option: `50`, iscorrect: false },
            { id: uuid(), option: `100`, iscorrect: false },
            { id: uuid(), option: `200`, iscorrect: false },
          ],
        },
        //2nd quizz
        {
          id: uuid(),
          question: `What is the next number in the sequence: 2, 4, 6, 8, ...?`,
          options: [
            { id: uuid(), option: `9`, iscorrect: false },
            { id: uuid(), option: `10`, iscorrect: true },
            { id: uuid(), option: `12`, iscorrect: false },
            { id: uuid(), option: `11`, iscorrect: false },
          ],
        },
        //3rd quizz
        {
          id: uuid(),
          question: `If you have 5 apples and you eat 2, how many are left?`,
          options: [
            { id: uuid(), option: `7`, iscorrect: false },
            { id: uuid(), option: `3`, iscorrect: true },
            { id: uuid(), option: `5`, iscorrect: false },
            { id: uuid(), option: `2`, iscorrect: false },
          ],
        },
        //4th quizz
        {
          id: uuid(),
          question: `Which number is smaller, 0 or -1?`,
          options: [
            { id: uuid(), option: `0`, iscorrect: false },
            { id: uuid(), option: `-1`, iscorrect: true },
            { id: uuid(), option: `Both are equal`, iscorrect: false },
            { id: uuid(), option: `Cannot be determined`, iscorrect: false },
          ],
        },
        //5th quizz
        {
          id: uuid(),
          question: `What is 10 times 10?`,
          options: [
            { id: uuid(), option: `100`, iscorrect: true },
            { id: uuid(), option: `1000`, iscorrect: false },
            { id: uuid(), option: `10`, iscorrect: false },
            { id: uuid(), option: `20`, iscorrect: false },
          ],
        },
        //6th quizz
        {
          id: uuid(),
          question: `If a dozen eggs cost ₹240, what is the cost of one egg?`,
          options: [
            { id: uuid(), option: `₹30`, iscorrect: false },
            { id: uuid(), option: `₹40`, iscorrect: false },
            { id: uuid(), option: `₹20`, iscorrect: true },
            { id: uuid(), option: `₹60`, iscorrect: false },
          ],
        },
        //7th quizz
        {
          id: uuid(),
          question: `What is the square root of 81?`,
          options: [
            { id: uuid(), option: `7`, iscorrect: false },
            { id: uuid(), option: `9`, iscorrect: true },
            { id: uuid(), option: `8`, iscorrect: false },
            { id: uuid(), option: `10`, iscorrect: false },
          ],
        },
        //8th quiz
        {
          id: uuid(),
          question: `If you divide 50 by half and add 20, what do you get?`,
          options: [
            { id: uuid(), option: `120`, iscorrect: false },
            { id: uuid(), option: `100`, iscorrect: false },
            { id: uuid(), option: `70`, iscorrect: false },
            { id: uuid(), option: `45`, iscorrect: true },
          ],
        },
        //9th quiz
        {
          id: uuid(),
          question: `What is 45 minutes as a fraction of an hour?`,
          options: [
            { id: uuid(), option: `3/4`, iscorrect: true },
            { id: uuid(), option: `1/2`, iscorrect: false },
            { id: uuid(), option: `2/3`, iscorrect: false },
            { id: uuid(), option: `1/4`, iscorrect: false },
          ],
        },
        //10th quiz
        {
          id: uuid(),
          question: `If a rectangle's length is twice its width, and the perimeter is 60 cm, what is the width?`,
          options: [
            {
              id: uuid(),
              option: `15 cm`,
              iscorrect: false,
            },
            { id: uuid(), option: `20 cm`, iscorrect: false },
            {
              id: uuid(),
              option: `10 cm`,
              iscorrect: true,
            },
            { id: uuid(), option: `25 cm`, iscorrect: false },
          ],
        },
      ],
    },
    {
      id: uuid(),
       main:"General",
      category: "Science Quiz",
      image:
        "https://th.bing.com/th/id/OIP.iFbUqtnyUMhVp96c0VUergHaEK?rs=1&pid=ImgDetMain",
      title: "Science Quiz",
      description:
        "Test your knowledge of chemistry, biology, physics and earth sciences with this quiz. See how much you remember from your school days or learn something new about the world around you. ",

      quizz: [
        // 1st quizz
        {
          id: uuid(),
          question: `Which of these planets is Earth's closest neighbor?`,
          options: [
            { id: uuid(), option: `Venus`, iscorrect: true },
            { id: uuid(), option: `Neptune`, iscorrect: false },
            { id: uuid(), option: `Mercury`, iscorrect: false },
            { id: uuid(), option: `Jupiter`, iscorrect: false },
          ],
        },
        //2nd quizz
        {
          id: uuid(),
          question: `Who came up with the idea that E=MC^2?`,
          options: [
            { id: uuid(), option: `Marie Curie`, iscorrect: false },
            { id: uuid(), option: `Stephen Hawking`, iscorrect: false },
            { id: uuid(), option: `Bill Gates`, iscorrect: false },
            { id: uuid(), option: `Albert Einstein`, iscorrect: true },
          ],
        },
        //3rd quizz
        {
          id: uuid(),
          question: `Which of these is not one of the five Kingdoms of Life?`,
          options: [
            { id: uuid(), option: `Mammalia`, iscorrect: true },
            { id: uuid(), option: `Fungi`, iscorrect: false },
            { id: uuid(), option: `Plantae`, iscorrect: false },
            { id: uuid(), option: `Animalia`, iscorrect: false },
          ],
        },
        //4th quizz
        {
          id: uuid(),
          question: `Which of these elements is most common in the air we breathe?`,
          options: [
            { id: uuid(), option: `Silicon`, iscorrect: false },
            { id: uuid(), option: `Nitrogen`, iscorrect: true },
            { id: uuid(), option: `Carbon`, iscorrect: false },
            { id: uuid(), option: `Hydrogen`, iscorrect: false },
          ],
        },
        //5th quizz
        {
          id: uuid(),
          question: `What does a light year measure??`,
          options: [
            { id: uuid(), option: `Distance`, iscorrect: true },
            { id: uuid(), option: `Time`, iscorrect: false },
            { id: uuid(), option: `Mass`, iscorrect: false },
            { id: uuid(), option: `Velocity`, iscorrect: false },
          ],
        },
        //6th quizz
        {
          id: uuid(),
          question: `If a dozen eggs cost ₹240, what is the cost of one egg?`,
          options: [
            { id: uuid(), option: `Nuclei`, iscorrect: false },
            { id: uuid(), option: `Mitochondria`, iscorrect: false },
            { id: uuid(), option: `Atoms`, iscorrect: true },
            { id: uuid(), option: `Gravitrons`, iscorrect: false },
          ],
        },
        //7th quizz
        {
          id: uuid(),
          question: `Isaac Newton came up with three laws of _______.`,
          options: [
            { id: uuid(), option: `Motion`, iscorrect: true },
            { id: uuid(), option: `Relativity`, iscorrect: false },
            { id: uuid(), option: `Gravity`, iscorrect: false },
            { id: uuid(), option: `Acceleration`, iscorrect: false },
          ],
        },
        //8th quiz
        {
          id: uuid(),
          question: `What is the most common element that makes up the structure of the Earth itself?`,
          options: [
            { id: uuid(), option: `Gold`, iscorrect: false },
            { id: uuid(), option: `Mercury`, iscorrect: false },
            { id: uuid(), option: `Helium`, iscorrect: false },
            { id: uuid(), option: `Iron`, iscorrect: true },
          ],
        },
        //9th quiz
        {
          id: uuid(),
          question: `About how far would you have to dig though land to break past the crust of the Earth into the mantle?`,
          options: [
            { id: uuid(), option: `Three miles`, iscorrect: false},
            { id: uuid(), option: `25 miles`, iscorrect: true },
            { id: uuid(), option: `350 miles`, iscorrect: false },
            { id: uuid(), option: `4,000 miles`, iscorrect: false },
          ],
        },
        //10th quiz
        {
          id: uuid(),
          question: `At what temperature Celsius does water freeze?`,
          options: [
            {
              id: uuid(),
              option: `100 degrees`,
              iscorrect: false,
            },
            { id: uuid(), option: `50 degrees`, iscorrect: false },
            {
              id: uuid(),
              option: `0 degrees`,
              iscorrect: true,
            },
            { id: uuid(), option: `32 degrees`, iscorrect: false },
          ],
        },
      ],
    },

  ],
};

export default quizzes;