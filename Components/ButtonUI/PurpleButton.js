const PurpleButton = (props) => {
  return (
    <button
      href={props.href}
      onClick={props.onClick}
      type="submit"
      className="block w-full h-full cursor-pointer rounded-bl-md rounded-br-md  border border-transparent bg-timesPurple px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
    >
      {props.buttonText}
    </button>
  );
};

export default PurpleButton;
