/**
 * The cards on the home page, in every language. Edit a card here and it changes on the
 * English and the Bangla home page together. `icon` is one of Starlight's icon names
 * (https://starlight.astro.build/reference/icons/); `link` is a docs path without the base.
 */
type Text = { title: string; text: string };
type Item = { icon: string; link: string; en: Text; bn: Text };

export const features: Item[] = [
	{
		icon: 'laptop',
		link: '/guides/websites/websites/',
		en: { title: 'Websites', text: 'Static and PHP sites (PHP 7.4 and 8.1 to 8.5 side by side), free HTTPS, redirects, a file manager, SFTP and FTP, cron jobs, logs and traffic charts.' },
		bn: { title: 'Website', text: 'Static আর PHP site (PHP 7.4 আর 8.1 থেকে 8.5 পাশাপাশি), বিনামূল্যে HTTPS, redirect, file manager, SFTP আর FTP, cron job, log আর traffic chart।' },
	},
	{
		icon: 'puzzle',
		link: '/guides/websites/wordpress/',
		en: { title: 'WordPress and PHP apps', text: 'One-click WordPress with safe updates, staging copies and hardening. Joomla, Drupal, Moodle and Laravel in one click too.' },
		bn: { title: 'WordPress আর PHP app', text: 'এক ক্লিকে WordPress, নিরাপদ update, staging কপি আর hardening সহ। Joomla, Drupal, Moodle আর Laravel-ও এক ক্লিকে।' },
	},
	{
		icon: 'rocket',
		link: '/guides/apps/docker-apps/',
		en: { title: 'Docker apps and Git', text: 'Run any image or Compose file, deploy from Git with rollbacks and pull request previews, or pick a service from the catalogue.' },
		bn: { title: 'Docker app আর Git', text: 'যেকোনো image বা Compose file চালান, Git থেকে deploy করুন rollback আর pull request preview সহ, অথবা catalogue থেকে একটা service বেছে নিন।' },
	},
	{
		icon: 'document',
		link: '/guides/data/backups/',
		en: { title: 'Databases and backups', text: 'MariaDB and PostgreSQL, and encrypted, deduplicated backups to S3-compatible storage with restores in a few clicks.' },
		bn: { title: 'Database আর backup', text: 'MariaDB আর PostgreSQL, আর S3-compatible storage-এ encrypted backup, কয়েক ক্লিকে restore।' },
	},
	{
		icon: 'email',
		link: '/guides/dns/email/',
		en: { title: 'Email and DNS', text: 'Mailboxes, forwarders and webmail; DNS at Cloudflare or on your own name servers with DNSSEC, with records made for you.' },
		bn: { title: 'Email আর DNS', text: 'Mailbox, forwarder আর webmail; DNS Cloudflare-এ বা আপনার নিজের name server-এ DNSSEC সহ, record নিজে থেকেই তৈরি হয়।' },
	},
	{
		icon: 'approve-check',
		link: '/guides/security/overview/',
		en: { title: 'Security', text: 'Firewall, CrowdSec bans, malware scans, country blocking and two-factor sign-in, with a checklist of what to tighten.' },
		bn: { title: 'নিরাপত্তা', text: 'Firewall, CrowdSec ban, malware scan, দেশ অনুযায়ী আটকানো আর two-factor sign-in, সাথে কী শক্ত করতে হবে তার checklist।' },
	},
	{
		icon: 'seti:folder',
		link: '/guides/admin/customers/',
		en: { title: 'Customers and packages', text: 'Give customers their own accounts with limits on sites, disk, memory and CPU that the kernel enforces.' },
		bn: { title: 'Customer আর package', text: 'Customer-দের নিজস্ব account দিন, site, disk, memory আর CPU-র সীমাসহ, যা kernel নিজেই মেনে চলায়।' },
	},
	{
		icon: 'list-format',
		link: '/start/add-server/',
		en: { title: 'Many servers', text: 'Add servers with one command. A small agent on each one does the work; the panel keeps track of everything.' },
		bn: { title: 'অনেক server', text: 'এক command-এ server যোগ করুন। প্রতিটাতে একটা ছোট agent কাজ করে; panel সব হিসাব রাখে।' },
	},
];

export const paths: { link: string; en: Text; bn: Text }[] = [
	{
		link: '/start/install/',
		en: { title: 'I want to host my websites', text: 'Install ekPanel on a server and put your first site online.' },
		bn: { title: 'আমি আমার website host করতে চাই', text: 'একটা server-এ ekPanel বসান আর প্রথম site অনলাইনে আনুন।' },
	},
	{
		link: '/guides/admin/customers/',
		en: { title: 'I run a hosting business', text: 'Customers, packages, limits, notifications and many servers.' },
		bn: { title: 'আমার hosting ব্যবসা আছে', text: 'Customer, package, সীমা, notification আর অনেক server।' },
	},
	{
		link: '/concepts/architecture/',
		en: { title: 'I want to understand how it works', text: 'The panel, the agents and how they keep servers in shape.' },
		bn: { title: 'আমি বুঝতে চাই এটা কীভাবে কাজ করে', text: 'Panel, agent, আর এরা কীভাবে server ঠিকঠাক রাখে।' },
	},
	{
		link: '/development/contributing/',
		en: { title: 'I want to help build it', text: 'Set up a development environment and make your first change.' },
		bn: { title: 'আমি এটা বানাতে সাহায্য করতে চাই', text: 'Development environment সাজান আর প্রথম পরিবর্তনটা করুন।' },
	},
];

/**
 * The commands shown next to the headline. They follow the install page (/start/install/).
 * Until the first release they build a release from source; once v0.1.0 is published, this
 * becomes the one-line installer:
 *   curl -fsSL https://github.com/ekPanel/ekpanel/releases/latest/download/install.sh | sudo bash -s -- --domain panel.example.com
 */
export const quickstart: Record<'en' | 'bn', { label: string; lines: string[] }> = {
	en: {
		label: 'Install from source',
		lines: [
			'# On your computer: build ekPanel',
			'git clone https://github.com/ekPanel/ekpanel.git',
			'cd ekpanel && make release VERSION=v0.0.1',
			'# On a fresh Ubuntu 24.04 server',
			'tar -xzf ekpanel-*-amd64.tar.gz && cd ekpanel-*-amd64',
			'sudo ./install.sh --local-dir . --domain panel.example.com',
		],
	},
	bn: {
		label: 'Source থেকে install',
		lines: [
			'# আপনার computer-এ: ekPanel build করুন',
			'git clone https://github.com/ekPanel/ekpanel.git',
			'cd ekpanel && make release VERSION=v0.0.1',
			'# নতুন একটা Ubuntu 24.04 server-এ',
			'tar -xzf ekpanel-*-amd64.tar.gz && cd ekpanel-*-amd64',
			'sudo ./install.sh --local-dir . --domain panel.example.com',
		],
	},
};
