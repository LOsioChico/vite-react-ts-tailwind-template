const getDependencyName = (dependency: string) => {
  if (dependency.startsWith('@')) {
    return dependency.split('@')[1];
  } else {
    return dependency.split('@')[0];
  }
};

export default getDependencyName;
