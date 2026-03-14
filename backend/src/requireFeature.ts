import { NextFunction, Request, Response } from "express"
import { featureFlags } from "./featureFlags"

export function requireFeature(featureName: string){
    return (req: Request, res: Response, next: NextFunction ) => {
        if (!featureFlags[featureName]){
            return res.status(404).send("Feature not available");
        }
        next()
    }
}