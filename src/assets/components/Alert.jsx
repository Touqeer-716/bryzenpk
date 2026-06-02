import Header from "./Header";
function Alert(props) {
  // const [count, setCount] = useState(0);
  const capatilize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <>
      {props.alert && (
        <div role="alert">
          <div
            className={`bg-${props.alert.color}-500 text-white font-bold rounded-t px-4 py-2`}
          >
            {props.alert.title}
          </div>
          <div
            className={`border border-t-0 border-${props.alert.color}-400 rounded-b bg-${props.alert.color}-100 px-4 py-3 text-${props.alert.color}-700`}
          >
            <p>{props.alert.message}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Alert;
