import productService from "../services/productService";

import type { Request, Response } from "express";
import type { User } from "../types";

const getProducts = async (req: Request, res: Response) => {
  // Request query
  const products = await productService.getProducts(req.query);

  res.status(200).json(products);
};

const getProductById = async (req: Request, res: Response) => {
  // Request params
  try {
    const id = req.params.id as string;

    const product = await productService.getProductById(id);

    res.json(product);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const createProduct = async (
  req: Request & { user: User; files: any },
  res: Response
) => {
  try {
    const data = await productService.createProduct(
      req.body,
      req.files as any,
      req.user._id as string
    );

    res.status(201).json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const updateProduct = async (
  req: Request & { user: User; files: any },
  res: Response
) => {
  const id = req.params.id as string;
  const user = req?.user;
  const files = req.files;

  try {
    const data = await productService.updateProduct(id, req.body, files, user);

    res.status(201).json(data);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const deleteProduct = async (req: Request & { user: User }, res: Response) => {
  const id = req.params.id as string;
  const user = req.user;

  try {
    await productService.deleteProduct(id, user);

    res.send(`Product deleted successfully with id: ${id}`);
  } catch (error: any) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
