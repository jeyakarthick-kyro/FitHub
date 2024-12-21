/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@react-google-maps/api" {
  export const GoogleMap: any;
  export const Marker: any;
  export function useLoadScript(options: { googleMapsApiKey: string }): {
    isLoaded: boolean;
    loadError: any;
  };
}

declare module "@react-google-maps/api";
