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
        <p>It can only give you food suggestions at the moment.</p>

        <p>
          If you don't know what you want to eat please answer with no when it
          asks if you have decided what to eat. Then you can tell the buddy what
          you want to eat and it will give you some suggestions
        </p>
        <p>
          If you want to restart your conversation there is a button on the top
          right, next to the close icon
        </p>
      </div>
      <h2>Examples for how to talk with the Cook Buddy:</h2>
      <div className="text-left">
        <p>I have some eggs and potatoes. What can I make with these ?</p>
        <p>I want to eat something gluten free</p>
        <p>What are the most popular pizzas</p>
      </div>
      <h2>After deciding what you want to eat:</h2>
      <div className="text-left">
        <p>
          You can create a new list or update an existing one. You can do this
          by talking to the Cook Buddy ot by using the top menu.
        </p>
        <p>
          Once you are on a shopping list page you can search for a recipe. If
          you click one of the suggestions all the required ingredients will be
          added to your shopping list.
        </p>
        <p>You can also add ingredients from the bottom of the list.</p>
        <p>You can check/uncheck list items by double clicking on them</p>
      </div>
      <h2>
        This app is build as a proof of concept. There are some bugs, non
        optimised code which were not fixed because they are not in the scope of
        this app
      </h2>
      <div className="popup">
        <video width="640" height="360" controls>
          <source src="/media/CookBuddy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default HomePage;
