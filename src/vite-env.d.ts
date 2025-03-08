/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_BACKEND_URL: string;  // Definir como tipo 'string'
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }