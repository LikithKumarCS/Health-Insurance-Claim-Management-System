import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { hospitalApi } from '../services/hospitalApi';

interface ClaimSubmissionData {
  customerPolicyId: number;
  claimAmount: number;
  treatmentDetails: string;
  treatmentDate: string;
  documents: File[];
}

export const useClaimSubmission = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const submitClaim = async (data: ClaimSubmissionData) => {
    try {
      setLoading(true);
      const result = await hospitalApi.createClaim(data);
      enqueueSnackbar('Claim submitted successfully!', { variant: 'success' });
      return result;
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to submit claim';
      enqueueSnackbar(errorMessage, { variant: 'error' });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const uploadDocuments = async (claimId: number, documents: File[]) => {
    try {
      setLoading(true);
      const result = await hospitalApi.uploadDocuments(claimId, documents);
      enqueueSnackbar('Documents uploaded successfully!', { variant: 'success' });
      return result;
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to upload documents';
      enqueueSnackbar(errorMessage, { variant: 'error' });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitClaim,
    uploadDocuments,
    loading
  };
};