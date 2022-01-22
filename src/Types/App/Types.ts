import { UseToastOptions } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import { UserView } from "../api";

export interface ApiLink {
  href: string;
  rel: string[];
}

export interface PagedApiResponse<T> extends ApiResponse {
  data: PagedApiResponseData<T>;
}

export interface PagedApiResponseData<T> {
  offset?: string;
  limit?: string;
  size?: number;
  value?: any[T];
  first?: ApiLink;
  last?: ApiLink;
  next?: ApiLink;
  self?: ApiLink;
  previous?: ApiLink;
}

export interface IRoutes {
  path: string;
  key: string;
  element:
    | React.ComponentType<React.ComponentProps<any>>
    | ReactElement<any, any>;
  children?: IRoutes[];
}

export interface ContextData {
  user?: UserView;
}

export const HttpMethods = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
};

export interface Response<T> {
  status: boolean;
  message: string;
  data: any;
}

export interface ApiResponse {
  status: any;
  message: string;
  data: any;
  error: any[];
  relations: any;
  href: string;
  method: string;
  routeName: string;
  routeValues: any;
}

export const Statuses = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  ONGOING: "ONGOING",
  RESOLVED: "RESOLVED",
  VERIFIED: "VERIFIED",
  DRAFTED: "DRAFTED",
  ONSALE: "ONSALE",
  SOLD: "SOLD",
  DRAFT: "DRAFT",
  REJECTED: "REJECTED",
  TRUE: true,
  FALSE: false,
};

export const ErrorMessages = {
  FAILED: "An Error occurred, Please try again later",
};

export interface NavItem {
  name: string;
  path: string;
  icon: IconType | any;
}

export const Endpoints = {
  Auth: {
    LOGIN: "admin/token",
  },
  User: {
    LOGIN: "admin/token",
    DELETE: "user/delete",
    LIST: {
      All: "user/list",
    },
    LISTINGS: {
      List: "property/user/created",
      Enquiry: "",
    },
  },
  Admin: {
    LOGIN: "admin/token",
    CREATE: "admin/create",
    LIST: "admin/list",
    METRICS: "admin/metrics",
    DELETE: "admin/delete",
    LIST_TRANSACTIONS: "admin/transactions/list",
    LIST_CLEAN_REQUESTS: "admin/clean/requests/list",
    LIST_PENDING_RELIEF_APPLICATION: "admin/applications/reliefs/pending",
    LIST_ACCEPTED_RELIEF_APPLICATION: "admin/applications/reliefs/accepted",
    LIST_REVIEWED_RELIEF_APPLICATION: "admin/applications/reliefs/reviewed",
    LIST_APPROVED_RELIEF_APPLICATION: "admin/applications/reliefs/approved",
    APPROVE_APPLICATION: "application/approve/",
    ACCEPT_APPLICATION: "application/accept/",
    REVIEW_APPLICATION: "application/review/",
    REJECT_APPLICATION: "application/reject/",
    ALL_TENANCIES: "admin/tenancies",
    LIST_RENT_APPLICATIONS: "admin/applications/rent",
    LIST_INSPECTION_DATES: "Property/inspectiondates/list/",
    ADD_INSPECTION_DATES: "Property/inspectiondates/create",
    ADD_INSPECTION_TIME: "Property/inspectiontime/create",
  },
  Listings: {
    AllListings: "admin/properties/list",
    PENDING_RENT: "admin/properties/list/rent/pending",
    RENT: "admin/properties/list/rent",
    GET: "property/get/",
    Requests: "admin/requests/list",
    GetRequest: "admin/requests/get/",
    Enquires: "admin/enquiries/list",
    Create: "admin/property/create",
    UpdateListing: "property/update",
    DeleteMedia: "",
    DeleteProperty: "property/delete/",
    ListTypes: "Property/types",
    APPROVE: "admin/property/approve/",
    REJECT: "admin/property/reject/",
  },
};

export const toastProps: UseToastOptions = {
  position: "top-right",
  isClosable: true,
  variant: "left-accent",
  duration: 9000,
};
