using System.Xml.Serialization;

namespace RceDoorzoeker.Configuration
{
	public class ReferenceStructureEntry
	{
		[XmlAttribute]
		public bool Enabled { get; set; }
		[XmlAttribute]
		public string Name { get; set; }
		[XmlAttribute]
		public string Uri { get; set; }
	}
}