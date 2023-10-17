import React from "react";
import { PlacesProvider } from "react";
import HomePage from "./screens";

export const MapsAps = () => {
    return {
        <PlacesProvider >
            <HomePage/>
        </PlacesProvider>
    }
    
}