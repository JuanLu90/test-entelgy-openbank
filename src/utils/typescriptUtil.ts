interface IStep {
  position: number;
  isDone: boolean;
}

interface ICredentials {
  password: string;
  confirmPassword: string;
  clue: string;
}

interface IResponse {
  status: number;
}

interface IInput {
  label: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  error: string;
  name: string;
}

interface IStep2 {
  credentials: {
    password: string;
    confirmPassword: string;
    clue: string;
  };
  errorState: {
    password: string;
    confirmPassword: string;
    clue: string;
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface IStep3 {
  loading: Boolean;
  response: {
    status: number;
  };
}

interface IWizardHeader {
  activeStep: number;
  steps: IStep[];
  setSteps: React.SetStateAction<any>;
}

export type {
  IStep,
  ICredentials,
  IResponse,
  IInput,
  IStep2,
  IStep3,
  IWizardHeader,
};
