const Footer = ({ storage }) => {
  let count = 0;
  storage.map((todo) => {
    if (!todo.checked) {
      count = count + 1;
    }
    return todo;
  });
  return (
    <div className="footer-css">
      <p>You have {count?count:"no"} pending tasks</p>
    </div>
  );
};
export default Footer;
