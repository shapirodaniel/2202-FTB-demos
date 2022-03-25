-- get admins
select 
	admins.id,
	employees.employee_type
from admins
join employees on employees.id = admins.employee_id;