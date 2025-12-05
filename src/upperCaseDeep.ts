type AnyObject = {
  [key: string]: any;
};

export const upperCaseDeep = <T extends AnyObject>(obj: T): T => {
  const result = { ...obj };

  for (const key in result) {
    const value = result[key];

    if (typeof value === 'string') {
      result[key] = value.toUpperCase();
    }
    else if (Array.isArray(value)) {
      result[key] = value.map((item: any) => {
        if (typeof item === 'string') {
          return item.toUpperCase();
        }
        else if (typeof item === 'object' && item !== null) {
          return upperCaseDeep(item);
        }
        return item;
      });
    }
    else if (typeof value === 'object' && value !== null) {
      result[key] = upperCaseDeep(value);
    }
  }

  return result;
}

