import Header from "./Header";
function Alert(props) {
  // const [count, setCount] = useState(0);
  const capatilize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capatilize(props.alert.type)} ! </strong>
          {props.alert.message}

          <button
            type="button"
            className="btn-close"
            // data-bs-dismiss="alert"
            onClick={props.handleClose}
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
}

export default Alert;
