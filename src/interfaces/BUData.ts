export type BUDataArray = BUData[];

export interface BUData {
  address: Address;
  code: string;
  colors_theme: string;
  datetime_config: DatetimeConfig;
  description: string;
  favicon: Favicon;
  id: string;
  logo: Logo;
  main: boolean;
  name: string;
  organization: Organization;
  responsible: Responsible;
  social_reason: string;
  timezone: string;
  users: User[];
}

export interface Address {
  country: string;
  first_line: string;
  location: string;
  postal_code: string;
  second_line: string;
  subdivision: string;
}

export interface DatetimeConfig {
  date_format: DateFormatElement[];
  datetime_format: DatetimeFormatElement[];
  time_format: TimeFormatElement[];
}

export interface DateFormatElement {
  element: string;
  value: string;
}

export interface DatetimeFormatElement {
  element: string;
  value: string;
}

export interface TimeFormatElement {
  element: string;
  value: string;
}

export interface Favicon {
  file_name: string;
  updated_at: string;
}

export interface Logo {
  file_name: string;
  updated_at: string;
}

export interface Organization {
  country: string;
  name: string;
  timezone: string;
}

export interface Responsible {
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  status: string;
  type: string;
}

export interface User {
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  status: string;
  type: string;
}
