const Register = () => {
  return (
    <div className="container mx-auto px-6">
      <form action="">
        <input type="text" className="border w-full my-1 rounded" />
        <input type="email" className="border w-full my-1 rounded" />
        <input type="password" className="border w-full my-1 rounded" />
        <input
          type="submit"
          value="Register"
          className="border w-full my-1 rounded bg-green-600"
        />
      </form>
    </div>
  );
};

export default Register;
