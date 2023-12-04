interface Spinner {
  start: (msg?: string | undefined) => void;
  stop: (msg?: string | undefined, code?: number | undefined) => void;
  message: (msg?: string | undefined) => void;
}

export default Spinner;
