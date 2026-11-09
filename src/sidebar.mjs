/**
 * The sidebar: one group per folder of src/content/docs/, in this order.
 *
 * Pages inside a group are listed by themselves: add a file to the folder and it appears.
 * Their order comes from `sidebar.order` in each page's frontmatter (1, 2, 3 …); the label
 * is the page title unless `sidebar.label` says otherwise. To add a group, add a folder and
 * a line here, with its name in every language.
 */
// Groups start folded, except the first; the group of the page being read is always open.
const group = (label, bn, directory, collapsed = true) => ({
	label,
	translations: { bn },
	collapsed,
	items: [{ autogenerate: { directory } }],
});

export const sidebar = [
	group('Start here', 'শুরু করুন', 'start', false),
	group('Websites', 'Website', 'guides/websites'),
	group('Apps', 'App', 'guides/apps'),
	group('Databases and backups', 'Database আর backup', 'guides/data'),
	group('DNS and email', 'DNS আর email', 'guides/dns'),
	group('Security', 'নিরাপত্তা', 'guides/security'),
	group('Running a hosting business', 'Hosting ব্যবসা চালানো', 'guides/admin'),
	group('How it works', 'কীভাবে কাজ করে', 'concepts'),
	group('Reference', 'রেফারেন্স', 'reference'),
	group('Contributing', 'অবদান রাখুন', 'development'),
	group('Project', 'প্রজেক্ট', 'project'),
];
