import BoxIcon from "../../Box-Icon/Box-Icon";
import Navigation from "../../Navigation/Navigation";

export default function Header() {
  function confirm() {
    alert("OK");
  }
  return (
    <>
      <BoxIcon click={confirm} />
      <Navigation />
    </>
  );
}
