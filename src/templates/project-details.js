import React from "react";
import Layout from "../components/Layout";
import * as styles from "./../styles/project-details.module.css";

const ProjectDetails = ({ pageContext }) => {
	const { html } = pageContext.details;
	const { title, stack } = pageContext.details.frontmatter;

	return (
		<Layout>
			<div className={styles.details}>
				<h2>{title}</h2>
				<h3>{stack}</h3>
				<div
					className={styles.html}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</Layout>
	);
};

export default ProjectDetails;
