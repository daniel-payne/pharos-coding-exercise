import nameSort from "src/utils/nameSort";

export default function extractNavigation(data: any): any {
  const level1: any[] = data.reduce((list: any[], item: any) => {
    let found = list.find((match: any) => match.name === item.BCAP1);

    if (!found) {
      return [...list, { name: item.BCAP1 }];
    }

    return list;
  }, []);

  const level2: any[] = data.reduce((list: any[], item: any) => {
    let found = list.find((match: any) => match.name === item.BCAP2);

    if (!found) {
      return [...list, { name: item.BCAP2 }];
    }

    return list;
  }, []);

  const level3: any[] = data.reduce((list: any[], item: any) => {
    let found = list.find((match: any) => match.name === item.BCAP3);

    if (!found) {
      return [...list, { name: item.BCAP3 }];
    }

    return list;
  }, []);

  level1.sort(nameSort);
  level2.sort(nameSort);
  level3.sort(nameSort);

  const navigation2 = level2.map((item: any) => {
    item.navigation = level3.filter((match) => match.name.includes(item.name));

    return item;
  });

  const navigation1 = level1.map((item: any) => {
    item.navigation = navigation2.filter((match) =>
      match.name.includes(item.name)
    );

    return item;
  });

  return navigation1;
}
