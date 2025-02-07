import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { checkProperty, sortByProperty } from '../utils/index.js'  

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OBJECT_JSON = path.join(__dirname, '..','utils', 'userObject.json');

interface userObjectInterface {
  name: string;
  favoriteFood: string;
  favoriteMovie: string;
  status: 'Active' | 'Inactive';
  runOn?: Date; 
}

function readDatabase(): userObjectInterface[] {
  try {
    const data = fs.readFileSync(OBJECT_JSON, 'utf8');
    return JSON.parse(data) as userObjectInterface[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log('Database file not found. Creating a new one.');
      return [];
    }
    console.error('Error reading database:', error);
    return [];
  }
}

function writeDatabase(data: userObjectInterface[]): void {
  try {
    fs.writeFileSync(OBJECT_JSON, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing database:', error);
  }
}

export function getAllUserObjects() {
    return readDatabase();
}

export function updateDateOnObjects() {
    const data = readDatabase();
    data.forEach((obj) => {
        const newDate = new Date();
        obj.runOn = newDate;
    });

    writeDatabase(data);
}

export function getAllActiveUsers() {
    const data = readDatabase();
    return data?.filter((obj) => obj.status?.toLocaleLowerCase() === 'active');
}

export function getUsersByProperty(propertyName: string){
    const data = readDatabase();
    if (data.length > 0) {
        if (checkProperty(data[0], propertyName)) {
            data.sort(sortByProperty(propertyName));
        } else {
            throw new Error('Invalid property');
        }
    }

    return data;
}