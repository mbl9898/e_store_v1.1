export interface DBProducts {
  _id?: string;
  productName: string;
  brandId: string;
  productImageURL: string;
  price: number | null;
  discountPrice: number;
  discountPercentage: any;
  sku: string;
  quantity: number | null;
  categoryId: string;
  productDescription: string;
  productReviews: string;
}

export interface DBCategories {
  _id: string;
  categoryName: string;
  categoryImageURL: string;
  subCategories: [{ _id: string; subCategoryName: string }];
}
