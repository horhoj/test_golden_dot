import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../store/hooks';
import { appSelectors } from '../store/app';

export const RedirectExecutor: React.FC = () => {
  const redirectUrl = useAppSelector(appSelectors.getRedirectUrl);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectUrl) {
      navigate(redirectUrl.path);
    }
  }, [redirectUrl]);

  return null;
};
