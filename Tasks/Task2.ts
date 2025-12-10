// структура данных склада с одеждой

interface IClothesWarehouse {
	jackets: string | number;
	hats: string | number
	socks: string | number
	pants: string | number;
}

// структура данных склада с канцтоварами

interface IStationeryWarehouse {
	scissors: string | number;
	paper: string | boolean;
}

// структура данных склада с бытовой техникой

interface IAppliancesWarehouse {
	dishwashers: string | number;
	cookers: string | number
	mixers: string | number;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

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

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

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
