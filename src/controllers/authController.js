import authService from "../services/authService.js";
import { createJWT } from "../utils/jwt.js";

const login = async (req, res) => {
  const input = req.body;

  try {
    if (!input) {
      return res.status(400).send("Required data are missing.");
    }

    if (!input.email) {
      return res.status(400).send("Email is required.");
    }

    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    const data = await authService.login(input);

    const authToken = createJWT(data);

    res.cookie("authToken", authToken);

    res.json({ ...data, authToken });
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const register = async (req, res) => {
  const input = req.body;

  try {
    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    if (!input.confirmPassword) {
      return res.status(400).send("Confirm password is required.");
    }

    if (input.password !== input.confirmPassword) {
      return res.status(400).send("Passwords do not match.");
    }

    const data = await authService.register(input);

    const authToken = createJWT(data);

    res.cookie("authToken", authToken);

    res.status(201).json({ ...data, authToken });
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const forgotPassword = async (req, res) => {
  const input = req.body;

  try {
    if (!input.email) {
      return res.status(400).send("Email address is required.");
    }

    const data = await authService.forgotPassword(input.email);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const resetPassword = async (req, res) => {
  const input = req.body;
  const query = req.query;

  try {
    if (!query.token || !query.userId) {
      return res.status(400).send("Token and user ID are required.");
    }

    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    if (!input.confirmPassword) {
      return res.status(400).send("Confirm password is required.");
    }

    if (input.password !== input.confirmPassword) {
      return res.status(400).send("Passwords do not match.");
    }

    const data = await authService.resetPassword(
      query.userId,
      query.token,
      input.password
    );

    res.status(201).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const logout = async (req, res) => {
  res.clearCookie("authToken");

  res.json({ message: "Logout successful" });
};

export default { register, login, forgotPassword, resetPassword, logout };
