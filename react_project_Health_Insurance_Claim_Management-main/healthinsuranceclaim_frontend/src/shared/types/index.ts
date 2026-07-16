export enum UserRole {
  Admin = 1,
  Customer = 2,
  Hospital = 3,
  ClaimOfficer = 4
}

export enum ClaimStatus {
  Submitted = 1,
  UnderReview = 2,
  DocumentsRequested = 3,
  Approved = 4,
  Rejected = 5,
  Paid = 6
}

export interface User {
  id: number;
  email: string;
  role: UserRole;
  token?: string;
}

export interface Claim {
  id: number;
  claimNumber: string;
  claimAmount: number;
  treatmentDetails: string;
  treatmentDate: string;
  submissionDate: string;
  status: ClaimStatus;
  rejectionReason?: string;
  documentRequest?: string;
  approvedAmount?: number;
  processedDate?: string;
  customerName: string;
  hospitalName: string;
  claimOfficerName?: string;
}

// Re-export to ensure proper module resolution
export type { Claim as ClaimType };

export interface DashboardData {
  totalUsers: number;
  totalCustomers: number;
  totalHospitals: number;
  totalClaimOfficers: number;
  totalPolicies: number;
  totalClaims: number;
  pendingClaims: number;
  approvedClaims: number;
  rejectedClaims: number;
}