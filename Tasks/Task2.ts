
interface IClothesWarehouse {
	jackets: string | number;
	hats: string | number
	socks: string | number
	pants: string | number;
}
interface IStationeryWarehouse {
	scissors: string | number;
	paper: string | boolean;
}
interface IAppliancesWarehouse {
	dishwashers: string | number;
	cookers: string | number
	mixers: string | number;
}
interface TotalWarehouse {
	deficit: boolean;
	date: Date;
}

interface ICombineWithThreeObjects extends IClothesWarehouse, IStationeryWarehouse, IAppliancesWarehouse { }

const totalData: ICombineWithThreeObjects = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
};

function printReport( totalData:ICombineWithThreeObjects ): string {

	const needsItems: string[] = []
	
	Object.entries(totalData).forEach(([key, value]) => {
		if( typeof value === "string" && value.includes("empty")  ) {
			needsItems.push(key)
		}
	})
	
	if (needsItems.length !== 0) {
		return `We need these items: ${needsItems}`
	} else {
		return "Everything fine";
	}
	
}

console.log(printReport(totalData));
