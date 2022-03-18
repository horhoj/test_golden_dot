import { FC } from 'react';
import { RequestError } from '../../store/types';

interface RequestErrorMSGProps {
  requestError: RequestError;
  title: string;
}

export const RequestErrorMSG: FC<RequestErrorMSGProps> = ({
  requestError,
  title,
}) => {
  return (
    <div className={'msg-error'}>
      {title ? <div>{title}</div> : null}
      {requestError.responseData ? (
        <div>{requestError.responseData}</div>
      ) : null}
      {requestError.errorMsg ? <div>{requestError.errorMsg}</div> : null}
    </div>
  );
};
