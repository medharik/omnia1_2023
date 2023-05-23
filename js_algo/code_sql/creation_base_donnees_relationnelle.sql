Atelier base de donnees :


create table jobs(
job_id int PRIMARY KEY AUTO_INCREMENT,
job_title  varchar(30) unique not null  ,
min_salary  float  ,
max_salary float ,
CONSTRAINT ck_sal_min  check(min_salary>=3000),
CONSTRAINT ck_sal_min  check (max_salary<=999900)
)
create table employees(
employee_id int PRIMARY KEY AUTO_INCREMENT,
first_name  varchar(200)  not null  ,
last_name  varchar(30)  not null  ,
  email  varchar(100) unique   ,
phone_number  varchar(15) unique   ,
hire_date date ,
job_id int ,
salary float ,
commission_pct float ,
manager_id  int,
department_id int ,
CONSTRAINT fk_dep_emp FOREIGN key(department_id) REFERENCES departments(department_id)    ,
    CONSTRAINT fk_job_emp FOREIGN key(job_id) REFERENCES jobs(job_id)    ,
    CONSTRAINT uc_emp unique(first_name,last_name)
    )


alter table departments add CONSTRAINT fk_manager_dep FOREIGN key(manager_id) references employees(employee_id);
