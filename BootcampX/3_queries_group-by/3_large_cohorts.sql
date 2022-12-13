SELECT cohorts.name as cohort_name, count(students.*) AS student_count 
FROM cohorts
JOIN students ON cohorts.id = cohort_id
GROUP BY cohort_name 
HAVING count(students.*) >= 18
ORDER BY student_count;

--looking for cohorts with 18 or more students
-- in this query, we are selecting cohorts.name and renaming it cohort_name, count(students.*) AS student_count
-- we are taking all this information from coforts
-- we are looking for information in the student.sql and cohort.sql under the cohort_id
-- we are grouping by cohort_name
-- our if condition in this case/conditional is any student that is 18 or over in the students.sql file
-- and ordering this by student count