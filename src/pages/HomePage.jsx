import { useEffect } from "react";
const HomePage = () => {
  const openCookBuddy = (e) => {
    e.preventDefault();
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: "show" });
    }
  };

  return (
    <>
      <h1>Shopping list app</h1>
      <div className="text-left">
        <p>
          You can create a new list, view your saved lists, or if you want
          inspiration for choosing a dish you can talk to your{" "}
          <a
            href="#"
            onClick={(e) => {
              openCookBuddy(e);
            }}
          >
            cook buddy
          </a>
        </p>
        <p>
          The cook buddy is not very experienced so{" "}
          <b>please always answer its questions</b>
        </p>
        <p>It can only give you food suggestions at the moment</p>

        <p>
          If you don't know what you want to eat please answer with no when it
          asks if you have decided what to eat. Then you can tell the buddy what
          you want to eat and it will give you some suggestions
        </p>
      </div>
      <h2>Examples for how to talk with the Cook Buddy:</h2>
      <div className="text-left">
        <p>I have some eggs and potatoes. What can I make with these ?</p>
        <p>I want to eat something gluten free</p>
        <p>What are the most popular pizzas</p>
      </div>
    </>
  );
};

export default HomePage;
