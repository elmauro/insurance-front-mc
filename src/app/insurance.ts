export class Insurance {
    insuranceId: number;
	name: string;
	description: string;
	type: number;
	coverage: string;
	start: string;
	period: number;
	price: number;
	risk: number;
}

export class Customer {
    document: string;
	name: string;
}

export class CustomerInsurance {
	customerInsuranceId: number;
	document: string;
	customerName: string;
	insuranceId: number;
	name: string;
	description: string;
	type: number;
	coverage: string;
	start: string;
	period: number;
	price: number;
	risk: number;
}

export class GridCustomerInsurance {
	insuranceId: number;
	name: string;
	description: string;
	type: number;
	coverage: string;
	start: string;
	period: number;
	price: number;
	risk: number;
	show: boolean;
}