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
        . <br /> The cook buddy is not very experienced so{" "}
        <b>please always answer his questions</b>
      </p>
    </>
  );
};

export default HomePage;
