-- grab all pets and filter by age 
SELECT * FROM pets
WHERE pets.age < 3;

-- list owners and their pets in order of pet age, ascending
-- ie, youngest pet first
SELECT owners.*, pets.name, pets.age 
FROM owners 
JOIN pets 
ON owners.id=pets."ownerId" 
ORDER BY pets.age ASC;

-- advanced!
-- how many pets does each owner have?
SELECT owners.*, count(pets."ownerId") AS number_of_pets
FROM owners
JOIN pets ON owners.id=pets."ownerId"
GROUP BY owners.id, owners.name;

-- advanced!
-- how many pets live in each location?
SELECT owners.location, count(pets.*) AS number_of_pets
FROM owners
JOIN pets ON owners.id=pets."ownerId"
GROUP BY owners.location;

-- advanced!
-- how many pets know more than one trick? 
-- list the pet id (as pet_id), pet name, owner name, and number of known tricks (as number_of_tricks)
SELECT 
  pets.id AS pet_id, 
  pets.name, 
  owners.name AS owner_name, 
  count(pet_trick.*) AS number_of_tricks
FROM pets
JOIN pet_trick ON pets.id=pet_trick."petId"
JOIN owners ON pets."ownerId"=owners.id
GROUP BY pets.id, pets.name, owners.name
HAVING count(pet_trick.*) > 1;
