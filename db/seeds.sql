INSERT INTO department (dept_name) VALUES ('Sales'), ('Finance'), ('Engineering'), ('Legal');
INSERT INTO company_role (title, salary, dept_id) VALUES
('Salesperson', 80000, 1),
('Sales Lead', 100000, 1),
('Software Engineer', 100000, 3),
('Accountant', 125000, 2),
('Legal Team Lead', 130000, 4),
('Lawyer', 120000, 4),
('Software Engineer', 100000, 3),
('Accountant', 125000, 2),
('Lawyer', 180000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, 5),
('Jane', 'Doe', 2, 8),
('Sally', 'Smith', 3, 7),

('Steve', 'Killark', 5, 4),
('Hayley', 'Williams', 6, 3),
('Larry', 'Page', 7, 1),
('Sergey', 'Brin', 8, 9),
('Tim', 'Cook', 9, 8);



