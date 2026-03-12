import express, { Request, Response } from 'express';
import { recommendedProducts } from './productInformation/dummyData';
import { toProductDTO } from './controllers/ModelToDTO';
import { featureFlags } from './services/FeatureFlagService';

const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get("/get-product-recommendations", (_: Request, res: Response) => {
    const shuffledProducts = recommendedProducts
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const randomProducts = shuffledProducts.slice(0, 5);
    return res.json(randomProducts.map(toProductDTO));
});

app.get("/get-products-by-category", (req: Request, res: Response) => {
  const products = recommendedProducts.filter((product) => {
    if (product.productType == req.query.productType) return product;
  })

  return res.json(products.map(toProductDTO));
});

app.get("/unfinished-feature", (_: Request, res: Response) => {
  if (!featureFlags.isEnabled('unfinishedFeature')) {
    // Oh no, this feature is not ready for production!
    return res.status(404).send('Feature Disabled');
  }
  res.status(200).send('Service Available');
});

app.post("/toggle-feature", (req: Request, res: Response) => {
  const { feature, enabled } = req.body;

  featureFlags.set(feature, enabled);

  res.json({
    feature,
    enabled
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
