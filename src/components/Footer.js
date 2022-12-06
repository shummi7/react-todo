const Footer = ({storage}) => {
    let count = 0;
    storage.map((todo)=>{
        if(!todo.checked){ count=count+1 }
        return todo;
    })
    return <div>
        <p>You have {count} pending tasks</p>
    </div>;
  };
  export default Footer;
  