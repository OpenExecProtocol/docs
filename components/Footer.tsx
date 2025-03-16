import styles from './Footer.module.css';

function Socials() {
  return (
    <div className={styles.socials}>
      <a
        target="_blank"
        href={`mailto:context@openexecprotocol.org`}
        title="Send us an email"
        rel="noreferrer"
      ></a>
    </div>
  );
}

type Resource = {
  url: string;
  title: string;
  external: boolean;
};

type ResourceColProps = {
  title: string;
  resources: Resource[];
};

function ResourceCol({ title, resources }: ResourceColProps) {
  return (
    <div className={styles.resourceCol}>
      <h3 className={styles.resourceTitle}>{title}</h3>
      <ul role="list" className={styles.resourceLinks}>
        {resources &&
          resources.map((resource) => (
            <li className={styles.resourceLink} key={resource.url}>
              <a
                target={resource.external ? '_blank' : '_self'}
                href={resource.url}
                rel="noreferrer"
              >
                {resource.title} {resource.external ? '' : ''}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const projectResources: Resource[] = [
    {
      url: 'https://github.com/OpenExecProtocol',
      title: 'GitHub',
      external: true,
    },
  ];

  const resources: Resource[] = [
    {
      url: '/',
      title: 'Documentation',
      external: false,
    },
    {
      url: 'https://github.com/OpenExecProtocol/Specification/releases',
      title: 'Releases',
      external: true,
    },
  ];

  const feedbackResources: Resource[] = [
    {
      url: '/discord',
      title: 'Discord',
      external: true,
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.sections}>
        <div className={styles.company}>
          <Socials />
        </div>
        <div className={styles.resources}>
          <ResourceCol title={'Project'} resources={projectResources} />
          <ResourceCol title={'Resources'} resources={resources} />
          <ResourceCol title={'Feedback'} resources={feedbackResources} />
        </div>
      </div>
      <div className={styles.copyrightContent}>
        <div className={styles.copyright}>
          <p>&copy; 2025 &mdash; present OXP Committee.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
