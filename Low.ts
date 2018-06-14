class Bike {
  maxSpeed: number;

  constructor(maxSpeed: number) {
    this.maxSpeed = maxSpeed;
  }
}

class scooter {
  maxSpeed: number;

  constructor(max_speed: number) {
    // set max speed
    this.maxSpeed = max_speed;
  }
}

/**
 * Updates the folder hierarchy
 */
const updateFolderHierarchy = (folderId: number) => {
  const folder = getFolder(folderId);
  const parent = folder.parentId ? getFolder(folder.parentId) : null;
  if (folder.parentId && !parent) {
    folder.parentId = null;
  }

  const children = getFolderByParentId(folderId);
  if (children.length > 0) {
    folder.childCount = children.length;
  }

  save(folder);
}
