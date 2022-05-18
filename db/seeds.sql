USE employee_DB;

INSERT INTO department (name)
VALUES
('Operations'),
('Analystics'),
('Marketing'),
('Executive'),
('Production');

INSERT INTO role (title, salary, department_id)
VALUES
('Associate', 25000, 1),
('Supervisor', 35000, 3),
('Lead', 28000, 2),
('Floor Manager', 45000, 1),
('Director', 55000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Denise', 'Aguinaldo', 1, NULL),
('Alyson', 'Garcia', 1, 1),
('Wayne', 'Kuppel', 1, 2),
('Angel', 'Santos', 3, 2),
('Andres', 'Valencia', 5, 2);