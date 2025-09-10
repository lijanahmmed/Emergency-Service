# Emergency Service  

**Emergency Service** is a responsive web project designed to provide quick access to essential emergency contacts.  
With a simple and user-friendly interface, users can instantly connect to various national helplines when needed.  

---

## Built With  
- **HTML** – Page structure  
- **Tailwind CSS** – Modern responsive styling  
- **DaisyUI** – Pre-designed UI components  
- **JavaScript (DOM)** – Dynamic functionality and interactivity  

---

## Features  
- Call to **National Emergency Number**  
- Quick dial to **Police Helpline**  
- Connect with **Fire Service**  
- Access to **Ambulance Service**  
- **Women & Child Helpline** for safety support  
- **Anti-Corruption Helpline** contact  
- **Electricity Helpline** for power issues  
- **BRAC Helpline** for community support  

---

## Question & Answer

#### Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : Here, getElementById finds a single element by its unique id name. But getElementsByClassName finds the list of all elements with the same class name. 
On the other hand, querySelector finds the first element that matches the sector identity. But querySelectorAll finds all elements that matches the selector identity.

#### Q2. How do you create and insert a new element into the DOM?

Answer : Firstly, we create a new element in the DOM, we use document.createElement() and pass the tag name of the element what we want to create. Then we can set contain using properties or attributes like innerHTML. Finally, we insert it into the DOM using method like appendChild() on this parent element.

#### Q3. What is Event Bubbling and how does it work?

Answer : Event Bubbling is a way events propagate in the DOM. When you do something on a child element that actions goes up its parent elements. Like we click a button and then it bubbles up to its parent elements such as div or whole page.

#### Q4. What is Event Delegation in JavaScript? Why is it useful?

Answer : Event Delegation is simple technique in javascript where we add a single event listener to a parent element, a parent element handles events for its child elements of adding events listener to each child. 

Event Delegation is very useful because it reduces code to make simple and it also saves memory by using fewer event listener. Moreover, it works for new elements that we add to the page later.

#### Q5. What is the difference between preventDefault() and stopPropagation() methods?

Answer : preventDefault() stops the browser from doing its normal thing. 
Example - When we use preventDefault(), click a button but it can stop to go to the page.

stopPropagation() stops the event from bubbling up or down in the DOM.
Example - When we use stopPropagation(), click a button but it won't trigger the parents click event.


## Live Link

[https://lijanahmmed.github.io/Emergency-Service/](https://lijanahmmed.github.io/Emergency-Service/)